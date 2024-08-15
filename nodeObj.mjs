const valueSetup = function valueGetterAndSetter() {
    let currentValue = null;

    const setValue = (value) => currentValue = value;
    
    const getValue = () => currentValue;

    return {setValue, getValue};
};

const nextNodeSetup = function nextNodeGetterAndSetter() {
    let currentNextNode = null;

    const setNextNode = (value) => currentNextNode = value;

    const getNextNode = () => currentNextNode;

    return {setNextNode, getNextNode};
};


export default function nodeSetup() {
    return {
        ...nextNodeSetup(),
        ...valueSetup(),
    }
};