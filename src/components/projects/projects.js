const projects = [
  {
    image:
      "data:image/png;base64,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",
    languages: "Javascript, Discord API",
    title: "Discord Application",
    description: "A multi functional discord bot",
    cached: "https://github.com/shadowctrl/whitehatian-discord-bot",
    live: "https://discord.gg/QKjrhegdx5",
  },
  {
    image: "/images/csi.png",
    languages: "Mern Stack",
    title: "CSI International Conference",
    description: "NGTCA 2023 website",
    live: "https://icngt2023.org",
  },
  {
    image:
      "https://user-images.githubusercontent.com/42708326/129001300-333c4bfd-db8f-4227-a1e2-2eff899080eb.png",
    languages: "Shellscript",
    title: "Monero Injector",
    description: "Automated stealth crypto miner",
    cached: "https://github.com/shadowctrl/crypto-miner",
  },
];
export default projects;
