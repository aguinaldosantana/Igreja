let yell = (msg: { toUpperCase: () => void; }) => {
    return msg.toUpperCase();
}

export default yell