var lang = "";
var type = "";
function translate() {
    if (args.length == 2) {
        type = args[0];
        lang = args[1];
    }

    if (type == "header") {
        switch (lang) {
            case "danish":
                return "             <#f0f0f0>Velkommen til <#ee2b23>T<#f04923>h<#f26622>e <#3551d7>F<#366dd9>l<#3789db>y<#38a4dd>i<#39c0df>n<#3adce1>g <#00ff00>B<#3fff00>i<#7dff00>r<#bcff00>d<#faff00>s";
                break;
            default:
                return "              <#f0f0f0>Welcome to <#ee2b23>T<#f04923>h<#f26622>e <#3551d7>F<#366dd9>l<#3789db>y<#38a4dd>i<#39c0df>n<#3adce1>g <#00ff00>B<#3fff00>i<#7dff00>r<#bcff00>d<#faff00>s";
        }

    } else if (type == "1") {
        switch (lang) {
            case "danish":
                return "  <#f0f0f0>Brug &akompasset <#f0f0f0>eller &a/tfb <#f0f0f0>for at komme i gang";
                break;
            default:
                return "      <#f0f0f0>Use the &acompass <#f0f0f0>or &a/tfb <#f0f0f0>to get started";
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
                return "                   <#f0f0f0>Henvist af en ven?";
                break;
            default:
                return "                 <#f0f0f0>Referred by a friend?";
        }
    } else if (type == "4") {
        switch (lang) {
            case "danish":
                return "         <#f0f0f0>Brug &a/refer &8<&aven&8> <#f0f0f0>for belønninger!";
                break;
            default:
                return "          <#f0f0f0>Use &a/refer &8<&afriend&8> <#f0f0f0>for rewards!";
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
                return "    <#f0f0ff>Vi håber, at din tid hos os når nye højder!";
                break;
            default:
                return " <#f0f0f0>We hope your time with us soars to new heights!";
        }
    } else { return "error"; }
}

translate();