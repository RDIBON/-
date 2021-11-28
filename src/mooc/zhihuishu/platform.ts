import {ZhsVideo} from "./video";
import {ZhsExam} from "./exam";
import {Application} from "@App/internal/application";
import {Mooc, MoocFactory} from "@App/internal/app/mooc";

export class ZhsPlatform implements MoocFactory {
    public CreateMooc(): Mooc {
        let mooc: Mooc = null;
        if (document.URL.indexOf("studyh5.zhihuishu.com/videoStudy.html") > 0) {
            mooc = new ZhsVideo();
        } else if (document.URL.indexOf("zhihuishu.com/stuExamWeb.html") > 0) {
            mooc = new ZhsExam();
        }
        if (mooc) {
            Application.App.config.SetNamespace("zhs");
        }
        return mooc;
    }
}
