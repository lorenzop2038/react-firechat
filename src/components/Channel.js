const { useState } = require("react")

const Channel = ({ user = null }) => {
    const [messages, setMessages] = useState([]);
    return <ul></ul>;
};

export default Channel;