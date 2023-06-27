export function convertBBC(param) {
  // preprocessing for tf2toolbox BBCode
  if (param.search(/TF2Toolbox/gim) != -1) {
    param = param
      .replace(
        /(\(List generated at .+?\[\/URL\]\))((?:.|\n)+)/gim,
        "$2\n\n\n$1"
      ) //Move TF2Toolbox link to bottom
      .replace("(List generated at", "(List generated from")
      .replace(/[^\S\n]+\(List/gim, "(List")
      .replace(/\[b\]\[u\](.+?)\[\/u\]\[\/b\]/gim, "[b]$1[/b]\n") //Fix double emphasized titles
      .replace(/(\n)\[\*\]\[b\](.+?)\[\/b\]/gim, "$1[*] $2");
  }

  const STEAM_CLAN_IMAGE = "https://clan.cloudflare.steamstatic.com/images/";

  //general BBcode conversion
  param = param
    .replace(/\[b\]((?:.|\n)+?)\[\/b\]/gim, "**$1**") //bold; replace [b] $1 [/b] with ** $1 **
    .replace(/\[\i\]((?:.|\n)+?)\[\/\i\]/gim, "*$1*") //italics; replace [i] $1 [/u] with * $1 *
    .replace(/\[\u\]((?:.|\n)+?)\[\/\u\]/gim, "$1") //remove underline;
    .replace(/\[s\]((?:.|\n)+?)\[\/s\]/gim, "~~ $1~~") //strikethrough; replace [s] $1 [/s] with ~~ $1 ~~
    .replace(/\[center\]((?:.|\n)+?)\[\/center\]/gim, "$1") //remove center;
    .replace(/\[quote\=.+?\]((?:.|\n)+?)\[\/quote\]/gim, "$1") //remove [quote=] tags
    .replace(/\[size\=.+?\]((?:.|\n)+?)\[\/size\]/gim, "## $1") //Size [size=] tags
    .replace(/\[color\=.+?\]((?:.|\n)+?)\[\/color\]/gim, "$1") //remove [color] tags
    .replace(
      /\[list\=1\]((?:.|\n)+?)\[\/list\]/gim,
      function (match, p1, offset, string) {
        return p1.replace(/\[\*\]/gim, "1. ");
      }
    )
    .replace(/{STEAM_CLAN_IMAGE}/gim, STEAM_CLAN_IMAGE)
    .replace(/\[img\]((?:.|\n)+?)\[\/img\]/gim, "![$1]($1)")

    .replace(/\[url=(.+?)\]((?:.|\n)+?)\[\/url\]/gim, "[$2]($1)")
    .replace(/\[\h2\]((?:.|\n)+?)\[\/\h2\]/gim, "*$1*")
    .replace(/\[\h1\]((?:.|\n)+?)\[\/\h1\]/gim, "<h1>$1</h1>")
    .replace(/\[\h3\]((?:.|\n)+?)\[\/\h3\]/gim, "<h3>$1</h3>")
    .replace(/(\n)\[\*\]/gim, "$1* ") //lists; replcae lists with + unordered lists.
    .replace(/\[\/*list\]/gim, "")
    .replace(/\[img\]((?:.|\n)+?)\[\/img\]/gim, "![$1]($1)")
    .replace(/\[url=(.+?)\]((?:.|\n)+?)\[\/url\]/gim, "[$2]($1)")
    .replace(/\[code\](.*?)\[\/code\]/gim, "`$1`")
    .replace(
      /\[code\]((?:.|\n)+?)\[\/code\]/gim,
      function (match, p1, offset, string) {
        return p1.replace(/^/gim, "    ");
      }
    )
    .replace(/\[php\](.*?)\[\/php\]/gim, "`$1`")
    .replace(
      /\[php\]((?:.|\n)+?)\[\/php\]/gim,
      function (match, p1, offset, string) {
        return p1.replace(/^/gim, "    ");
      }
    )
    .replace(/\[pawn\](.*?)\[\/pawn\]/gim, "`$1`")
    .replace(
      /\[pawn\]((?:.|\n)+?)\[\/pawn\]/gim,
      function (match, p1, offset, string) {
        return p1.replace(/^/gim, "    ");
      }
    );

  //post processing for tf2toolbox BBCode
  if (param.search(/TF2Toolbox/gim) != -1) {
    param = param
      .replace(
        "/bbcode_lookup.php))",
        "/bbcode_lookup.php) and converted to /r/tf2trade ready Markdown by Dum's [converter](http://jondum.github.com/BBCode-To-Markdown-Converter/))."
      ) //add a linkback
      .replace(/\*\*.+?\*\*[\s]+?None[\s]{2}/gim, ""); //remove empty sections
  }
  return param;
}
