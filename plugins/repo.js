const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
    r_text[0] = "https://i.imgur.com/qs6CScf.png";


    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*BOT LISTS* \n\n\n
\n *https://github.com/nexusNw/filo/* -owned by nexusNw \n
\n *https://github.com/cyberchekuthan/Amalser_v1/* -owned by Amalser \n
\n *https://github.com/farhan-dqz/JulieMwol/* -owned by Farhan-dqz \n
\n *https://github.com/saidalisaid2/Liyamol/* -owned by saidali \n
\n *https://github.com/J-I-H-A-D/ElsaMwol/* -owned by Jihad \n
\n *https://github.com/afnanplk/lastpink* -owned by Afnan plk \n
\n *https://github.com/terror-boy/WhiteDevil/* -owned by Karthik_terror-boy \n
```to view more,check my business cataloge```

`}) 

}));


  
