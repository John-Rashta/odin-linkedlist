const sizeSetup = function sizeGetMinusPLusSetup() {
    let size = 0;

    const getSize = () => size;

    const minusSize = () => size -= 1;

    const plusSize = () => size += 1;

    return {getSize, minusSize, plusSize};
};

const headSetup = function headGetterAndSetter() {
    let head = null;

    const getHead = () => head;

    const setHead = (value) => head = value;
    
    return {getHead, setHead};
};

const tailSetup = function tailGetterAndSetter() {
    let tail = null;

    const getTail = () => tail;

    const setTail = (value) => tail = value;

    return {getTail, setTail};
};

const appendValue = function appendNodeToStartOfList(tail, node) {
    tail.setNextNode(node);
};

const prependValue = function prependNodeToEndOfList(head, node) {
    node.setNextNode(head);
};

const popValue = function popNodeFromEndOfList(head, tail) {
    let currentNode = head;

    while (!(currentNode.getNextNode() === tail)) {
        currentNode = currentNode.getNextNode();
    }

    currentNode.setNextNode(null);

    return currentNode;
};

const atIndex = function findNodeAtIndexGiven(head, index) {
    let currentIndex = 0;
    let currentNode = head;

    while (!(currentIndex === index) && currentNode) {
        currentNode = currentNode.getNextNode();
        currentIndex += 1;
    }

    return currentNode;
};

const containsValue = function containsValueInList(head, value) {
    let currentNode = head;
    let valueIsPresent = false;

    while (!(currentNode.getNextNode() === null)) {
        if (currentNode.getValue() === value) {
            valueIsPresent = true;
            break;
        }
        currentNode = currentNode.getNextNode();
    }

    return valueIsPresent;

};

const findValue = function findValueAndReturnIndex(head, value) {
    let currentNode = head;
    let currentIndex = 0;
    let foundValue = false;

    while (!(currentNode.getNextNode() === null)) {
        if (currentNode.getValue() === value) {
            foundValue = true;
            break;
        }
        currentNode = currentNode.getNextNode();
        currentIndex += 1;
    }

    if (foundValue) {
        return currentIndex;
    }

    return null;
};

const toStringList = function makeListIntoAString(head) {
    let currentNode = head;
    let listString = "";

    while (!(currentNode === null)) {
        listString = listString.concat(`( ${currentNode.getValue()} ) -> `);
        currentNode = currentNode.getNextNode();
    }

    return listString.concat("null");

};

const insertAtIndex = function insertNodeInListAtIndex(head, node, index) {
    let currentNode = head;
    let nextNode = head.getNextNode();
    let currentIndex = 0;

    while (currentIndex !== index -1) {
        currentNode = nextNode;
        nextNode = currentNode.getNextNode();
        currentIndex += 1;
    }

    currentNode.setNextNode(node);
    node.setNextNode(nextNode);
}

const removeAtIndex = function removeNodeFromListAtIndex(head, index) {
    let currentNode = head;
    let nextNode = head.getNextNode();
    let afterNextNode = nextNode.getNextNode();
    let currentIndex = 0;

    while (currentIndex !== index-1) {
        currentNode = nextNode;
        nextNode = currentNode.getNextNode();
        afterNextNode = nextNode.getNextNode();
        currentIndex += 1;
    }

    currentNode.setNextNode(afterNextNode);
}

export default function linkedListSetup() {
    return {
        ...sizeSetup(),
        ...headSetup(),
        ...tailSetup(),
        appendValue,
        prependValue,
        popValue,
        atIndex,
        containsValue,
        findValue,
        toStringList,
        insertAtIndex,
        removeAtIndex,

    }

};

