var lang = "";
var type = "";

function getRandomMessage(messages) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}
var greetings = [
    "<#f0f0f0>Welcome back, {player_nick}<#f0f0f0>! Flap, mine, build, repeat",
    "<#f0f0f0>Pip, {player_nick}<#f0f0f0>! Wing it, mine it, craft it, repeat",
    "<#f0f0f0>Hey there, {player_nick}<#f0f0f0>! Fly, dig, build, respawn",
    "<#f0f0f0>Welcome back, {player_nick}<#f0f0f0>! Now go and be a good bird!",
    "<#f0f0f0>Piiiip, {player_nick}<#f0f0f0>! Unleash your wings!",
    "<#f0f0f0>The Emperor, {player_nick}<#f0f0f0>! Reign supreme!",
    "<#f0f0f0>Welcome, {player_nick}<#f0f0f0>! Forge your legacy!",
    "<#f0f0f0>Well hello, {player_nick}<#f0f0f0>! Soar above limits!",
    "<#f0f0f0>Hi, {player_nick}<#f0f0f0>! Reignite your Minecraft journey!",
    "<#f0f0f0>Greetings, {player_nick}<#f0f0f0>! Manifest your Minecraft vision!",
    "<#f0f0f0>Hey there, {player_nick}<#f0f0f0>! Fly high, dig deep, build big!",
    "<#f0f0f0>Bow to the redstone wizard, {player_nick}!",
    "<#f0f0f0>Hail the Ender Dragon Slayer, {player_nick}!",
    "<#f0f0f0>Embrace the Architect Extraordinaire, {player_nick}!",
];

var tips = [
    "<#f0f0f0>Use &a/tfb <#f0f0f0>for easy access to... &e&oeverything<#f0f0f0>!",
    "<#f0f0f0>Get your friends to use &a/refer <#f0f0f0>for rewards!",
    "<#f0f0f0>Do you want to improve <#ee2b23>T<#3551d7>F<#00ff00>B<#f0f0f0>? We're waiting on <#5865F2>Discord<#f0f0f0>!",
    "<#f0f0f0>Want to build something for <#ee2b23>T<#3551d7>F<#00ff00>B<#f0f0f0>? We're waiting on <#5865F2>Discord<#f0f0f0>!"
]

function translate() {
    if (args.length == 2) {
        type = args[0];
        lang = args[1];
    }

    if (type == "header") {
        switch (lang) {
            case "danish":
                return getRandomMessage(greetings);
                break;
            default:
                return getRandomMessage(greetings);
        }

    } else if (type == "1") {
        switch (lang) {
            case "danish":
                return "<#f0f0f0>Brug &a/tfb <#f0f0f0>for at komme i gang";
                break;
            default:
                return "&aClick here to vote &c<3";
        }
    } else if (type == "2") {
        switch (lang) {
            case "danish":
                return "";
                break;
            default:
                return "";
        }
    } else if (type == "3") {
        switch (lang) {
            case "danish":
                return "<#f0f0f0>Henvist af en ven?";
                break;
            default:
                return "&eTip of the day&8:";
        }
    } else if (type == "4") {
        switch (lang) {
            case "danish":
                return "<#f0f0f0>Brug &a/refer &8<&aven&8> <#f0f0f0>for belønninger!";
                break;
            default:
                return getRandomMessage(tips);
        }
    } else if (type == "5") {
        switch (lang) {
            case "danish":
                return "";
                break;
            default:
                return "";
        }
    } else if (type == "6") {
        switch (lang) {
            case "danish":
                return "<#f0f0ff>Vi håber, at din tid hos os når nye højder!";
                break;
            default:
                return "<#f0f0f0>We hope your time with us soars to new heights!";
        }
    } else { return "error"; }
}

translate();