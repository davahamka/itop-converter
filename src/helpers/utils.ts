class NodeLL {
    public data: string;
    public next!: NodeLL | null;

    constructor(data: string) {
        this.data = data;
    }
}

class SingleLinkedList {
    head: NodeLL | null;
    tail: NodeLL | null;
    size!: number;

    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    isEmpty(): boolean {
        return this.size == 0;
    }

    clear() {
        this.head = this.tail = null;
        this.size = 0;
    }

    addLast(d: string) {
        let p = this.head;
        let nd = new NodeLL(d);
        if (this.head === null) {
            this.head = this.tail = nd;
        } else {
            while (p !== null) {
                if (p.next == null) {
                    p.next = nd;
                    this.tail = nd;
                    break;
                }
                p = p.next;
            }
        }
        this.size++;
    }

    removeLast() {
        let p = this.head;
        if (!this.isEmpty()) {
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                while (p !== null) {
                    if (p.next == this.tail) {
                        p.next = null;
                        this.tail = p;
                        break;
                    }
                    p = p.next;
                }
            }
            this.size--;
        } else {
            //
        }
    }

    print() {
        let p = this.head;
        while (p !== null) {}
    }
}

class Stack {
    top!: NodeLL | any;
    size!: number;
    sll: SingleLinkedList;

    constructor() {
        this.sll = new SingleLinkedList();
    }

    push(input: string) {
        this.sll.addLast(input);
        this.top = this.sll.tail;
    }

    pop(): string | any {
        let res = this.sll.tail?.data;
        this.sll.removeLast();
        return res;
    }

    peek(): string {
        return this.top.data;
    }

    isEmpty(): boolean {
        return this.sll.isEmpty();
    }
}

const infixToPostfix = (value: string): string => {
    let st = new Stack();
    let output = "";
    const getOp = (opThis: string, precedence1: number) => {
        while (!st.isEmpty()) {
            let opTop = st.pop();
            if (opTop === "(") {
                st.push(opTop);
                break;
            } else {
                let precedence2: number;
                if (opTop === "+" || opTop === "-") {
                    precedence2 = 1;
                } else if (opTop === "+" || opTop === "-") {
                    precedence2 = 2;
                } else {
                    precedence2 = 3;
                }
                if (precedence2 < precedence1) {
                    st.push(opTop);
                    break;
                } else {
                    output = output + opTop;
                }
            }
        }
        st.push(opThis);
    };

    for (let i = 0; i < value.length; i++) {
        let temp = value.charAt(i);
        switch (temp) {
            case "+":
            case "-":
                getOp(temp, 1);
                break;
            case "*":
            case "/":
                getOp(temp, 2);
                break;
            case "^":
                getOp(temp, 3);
                break;
            case "(":
                st.push(temp);
                break;
            case ")":
                while (!st.isEmpty()) {
                    let chx = st.pop();
                    if (chx === "(") {
                        break;
                    } else {
                        output = output + chx;
                    }
                }
                break;
            default:
                output = output + temp;
                break;
        }
    }
    while (!st.isEmpty()) {
        output = output + st.pop();
    }
    return output;
};

export { infixToPostfix };