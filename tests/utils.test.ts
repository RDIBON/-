(<any>global).window = global;
import {removeHTML, dealHotVersion, removeHTMLTag} from "@App/internal/utils/utils";

describe("remove html", () => {
    it("不包含html", () => {
        let eg = "这是一句正常的话,应该不要发送改变";
        expect(removeHTML(eg)).toEqual(eg);
        expect(removeHTML("包含一些中文符号，例如：（）？这样一些“”")).toEqual("包含一些中文符号,例如:()?这样一些\"\"");
        expect(removeHTML('123 124 <br> <br>')).toEqual("123 124")
    });
    it("包含html", () => {
        expect(removeHTML('<span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">依靠群众求胜利</span></span>')).toEqual("依靠群众求胜利");
        expect(removeHTML('<p><span style="font-family: &quot;Times New Roman&quot;; font-size: 14px;">empty</span>&nbsp;</p>')).toEqual("empty");
        expect(removeHTML('<p><span style="font-family: &quot;Times New Roman&quot;; font-size: 14px;">bare</span></p>')).toEqual("bare");
        expect(removeHTML('<a href="javascript:void(0);"><p>选择3</p></a>')).toEqual("javascript:void(0);选择3");
        expect(removeHTML("<p><span style=\"display: inline !important; float: none; background-color: transparent; color: rgb(102, 102, 102); font-family: 宋体; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; word-spacing: 0px;\"  >我国现行的兵役制是________。</span></p>")).toEqual("我国现行的兵役制是________.");
        expect(removeHTML('<p>测试单选题<img src="https://p.ananas.chaoxing.com/star3/origin/8c1d31628eeca926c251bffd4968627e.png" title="1.png" alt="1.png" width="54" height="54" border="0" vspace="0" style="width: 54px; height: 54px;" data-original="https://p.ananas.chaoxing.com/star3/origin/8c1d31628eeca926c251bffd4968627e.png"></p></div>')).toEqual("测试单选题https://p.ananas.chaoxing.com/star3/origin/8c1d31628eeca926c251bffd4968627e.png");

        expect(removeHTML('<p><iframe data="91e555f94f1954d98dddda68d20fb2a3" height="62px" width="auto" frameborder="0" allowtransparency="true" style="background-color:transparent;border-radius: 3px;overflow: hidden;z-index: 0;" scrolling="no" src="/module/audioplay.html?objectid=91e555f94f1954d98dddda68d20fb2a3&amp;resids=439200623890747392&amp;puid=36250294" class="ans-insertaudio-module" module="_insertaudio" __idm_id__="15520769"> </iframe></p><p>单4<br></p>')).toEqual("/module/audioplay.html?objectid=91e555f94f1954d98dddda68d20fb2a3&resids=439200623890747392&puid=36250294单4");

        expect(removeHTML('<p>测试多选题目</p><p><iframe data="91e555f94f1954d98dddda68d20fb2a3" height="62px" width="auto" frameborder="0" allowtransparency="true" style="background-color:transparent;border-radius: 3px;overflow: hidden;z-index: 0;" scrolling="no" src="/module/audioplay.html?objectid=91e555f94f1954d98dddda68d20fb2a3&amp;resids=439200623890747392&amp;puid=36250294" class="ans-insertaudio-module" module="_insertaudio"> </iframe></p><p class="attach"><img src="/js/editor20150812/dialogs/attachment_new/fileTypeImages/icon_default.gif"><a href="/ueditorupload/read?objectId=d6671c9b4756f25d8364bc24f180216f" target="_blank" name="题库导入模板.xlsx" type="xlsx">题库导入模板.xlsx</a></p><p><br></p>')).toEqual("测试多选题目/module/audioplay.html?objectid=91e555f94f1954d98dddda68d20fb2a3&resids=439200623890747392&puid=36250294/js/editor20150812/dialogs/attachment_new/fileTypeImages/icon_default.gif/ueditorupload/read?objectId=d6671c9b4756f25d8364bc24f180216f题库导入模板.xlsx");
    });
    it("remove html tag", function () {
        expect(removeHTMLTag("我爱你")).toEqual("我爱你");
        expect(removeHTMLTag("<p>我爱你</p>")).toEqual("我爱你");
        expect(removeHTMLTag("<p>我爱你")).toEqual("我爱你");
    });
});

describe("简单方法", () => {
    it("dealHotVersion", () => {
        expect(dealHotVersion("2.12.7")).toEqual(2.127);
    });
});