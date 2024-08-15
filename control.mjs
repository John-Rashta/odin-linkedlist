import makeNode from "./nodeObj.mjs";
import listSetup from "./listObj.mjs";

function linkedList() {
    const linkList = listSetup();

    const size = () => linkList.getSize();

    const head = () => linkList.getHead();

    const tail = () => linkList.getTail();

    const append = function appendValueToList(value) {
        if (!value) {
            return;
        }

        const newNode = makeNode();
        newNode.setValue(value);

        if (!linkList.getHead()) {
            linkList.setHead(newNode);
            linkList.setTail(newNode);
            linkList.plusSize();
            return;
        }

        linkList.appendValue(linkList.getTail(), newNode);
        linkList.setTail(newNode);
        linkList.plusSize();
    };

    const prepend = function prependValueToList(value) {
        if (!value) {
            return;
        }

        const newNode = makeNode();
        newNode.setValue(value);

        if (!linkList.getHead()) {
            linkList.setHead(newNode);
            linkList.setTail(newNode);
            linkList.plusSize();
            return;
        }

        linkList.prependValue(linkList.getHead(), newNode);
        linkList.setHead(newNode);
        linkList.plusSize();
    };

    const at = function nodeAtIndex(index) {
        if (!linkList.getHead()) {
            return;
        }

        if (index === null || index === undefined) {
            return;
        }

        if (linkList.getSize()-1 < index) {
            return;
        }

        return linkList.atIndex(linkList.getHead(), index);

    };

    const pop = function popNode() {
        if (!linkList.getHead()) {
            return;
        }

        if (linkList.getTail() === linkList.getHead()) {
            linkList.setHead(null);
            linkList.setTail(null);
            linkList.minusSize();
            return;
        }
        
        
        linkList.setTail(linkList.popValue(linkList.getHead(), linkList.getTail()));
        linkList.minusSize();
    }

    const contains = function containsTheValue(value) {
        if (!linkList.getHead()) {
            return;
        }

        if (!value) {
            return;
        }

        return linkList.containsValue(linkList.getHead(), value);
    };

    const find = function findIndexOfValue(value) {
        if (!linkList.getHead()) {
            return;
        }

        if (!value) {
            return;
        }

        return linkList.findValue(linkList.getHead(), value);
    };

    const toString = function getListAsString() {
        if (!linkList.getHead()) {
            return null;
        }

        return linkList.toStringList(linkList.getHead());
    }

    const insertAt = function insertNodeAtIndex(value, index) {
        if (!value || index === null || index === undefined) {
            return;
        }
        

        if (!linkList.getHead()) {
            return;
        }

        

        if (linkList.getSize() <= index) {
            return;
        }

        const newNode = makeNode();
        newNode.setValue(value);

        if (index === 0) {
            linkList.prependValue(linkList.getHead(), newNode);
            linkList.setHead(newNode);
            linkList.plusSize();
            return;
        }

       linkList.insertAtIndex(linkList.getHead(), newNode, index);
       linkList.plusSize();


    }

    const removeAt = function removeNodeAtIndex(index) {
        if (index === null || index === undefined) {
            return;
        }

        if (!linkList.getHead()) {
            return;
        }

        if (linkList.getSize() <= index) {
            return;
        }

        if (index === 0) {
            linkList.setHead(linkList.getHead().getNextNode());
            linkList.minusSize();
            return;
        }

        if (index + 1  === linkList.getSize()) {
            linkList.setTail(linkList.popValue(linkList.getHead(), linkList.getTail()));
            linkList.minusSize();
            return;
        }

        linkList.removeAtIndex(linkList.getHead(), index);
        linkList.minusSize();
    }

    return {
        size,
        head,
        tail,
        append,
        prepend,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };
}

const list = linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

