const SPIN = new function () {
    let SPIN = this, cnv, ctx , width , height, nodes = [],node__count = 0 , for__destroy = {}, down_keys = {}, timer = 0, user_draw;
// переменные canvas , context , width , height , игрового поля

        let $ = (id) => {return document.getElementById(id)};

        let rect = (x, y ,w ,h, clr) => {
            ctx.fillStyle = clr;
            ctx.fillRect(x, y , w, h );
        };

        let text = (x,y, clr ,text) => {
            ctx.fillStyle = clr;
            ctx.fillText(text,x,y);
        };

        class Node {
            // инициализация объекта
            constructor (x, y, w, h, clr, upd ) {
                this.id = node__count++;
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.clr = clr;
                this.update = upd;
                nodes.push(this);
            }
            // обновление информации
            _update () {
                if(this.update)
                this.update(this);
            }
            // отрисовка объекта
            draw () {
                rect(this.x, this.y, this.w, this.h, this.clr);
            }
            // производит его удаление
            destroy () {
                for__destroy[this.id] = this;
            }
            // отвечает за движение || изменение его координат по оси x и оси y .
            move (x,y) {
                this.x += x;
                this.y += y;
            }

            intersect (node) {
                return !(this.x+this.w < node.x || this.y+this.h < node.y || this.x > node.x+node.w || this.y > node.y+node.h);
            }
        };

        SPIN.create__node = (x, y, w, h, clr, upd) => {
            return new Node(x, y, w, h, clr, upd);
        };

        SPIN.draw_text = (x,y,clr,_text) => {
            text(x,y,clr,_text);
        };


        SPIN.update = () => {
            ctx.clearRect(0, 0 , width, height);
            for(let i = nodes.length - 1; i >= 0; i--) {
                if (for__destroy[nodes[i].id]) {
                    nodes.splice(i, 1);
                    continue;
                }

                nodes[i]._update();
                nodes[i].draw();

                // console.log(nodes[i]);
            }
                if (user_draw)
                user_draw(SPIN);
                requestAnimationFrame(SPIN.update);
                timer++;
    };

    SPIN.key = (key) => {
        return down_keys[key];
    };

    SPIN.clear_timer = () => {
        timer = 0;
    };

    SPIN.get_timer = () => {
        return timer;
    };

    SPIN.set_draw = (f) => {
        user_draw = f;
    };

        SPIN.start = (W , H) => {
            cnv = $('cnv');
            ctx = cnv.getContext('2d');
            width = W;
            height = H;
            cnv.width = width;
            cnv.height = height;

            window.addEventListener('keydown', (event) => {
                down_keys[event.code] = true;
            });

            window.addEventListener('keyup', (event) => {
               delete down_keys[event.code];
            });

            SPIN.update();
        };
    };


window.addEventListener('load', function () {
    SPIN.start(640,480);

    let enemies = [], score = 0;

    let enemy_ai =  (node) => {
        node.y += 0.2;
    };

    let bullet_ai = (node) => {
        node.y -= 3;
        if (node.y + node.h < 0 )
            node.destroy();
        for( i = enemies.length - 1; i >= 0; i--) {
            if (node.intersect(enemies[i])) {
                enemies[i].destroy();
                node.destroy();
                enemies.splice(i,1);
                score += 1;
                break;
            }
        }
    };


    for(let j = 0; j < 20; j++) {
        for( let i = 0; i < 10; i++) {
    enemies.push(SPIN.create__node(30 + (20 + 40) * i,-1000 + (20 + 40) * j, 30, 30, '#ff6d5a', enemy_ai , (node) => {
    }));

    }
}

let fire = (x,y) => {
    if (SPIN.get_timer() > 16) {
    SPIN.create__node(x, y, 10, 20, '#41bc4c', bullet_ai);
    SPIN.clear_timer();
    console.log('fire')
    }
};

    SPIN.create__node(640/2-25 , 480-50-30, 45, 45, 'rgb(251, 90, 26)' , (node) => {
        if (SPIN.key('KeyA'))
            node.x -= 3;
        if (SPIN.key('KeyD'))
            node.x += 3;
            if (SPIN.key('Space'))
            fire(node.x+25-5, node.y);

    });
    SPIN.set_draw((s) => {
        s.draw_text(10,20,'#fff', 'Ваш счет: ' + score)
    })
});