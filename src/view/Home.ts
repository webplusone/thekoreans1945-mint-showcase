import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        BodyNode.append(
            this.container = el(".home-view",
                el("img.top-image", { src: "/images/koreans-bottom.png", alt: "koreans" }),
                el(".content",
                    el("img.crypto", { src: "/images/crypto-punk.png", alt: "crypto-punk" }),
                    el(".mint-container",
                        el(".title-container",
                            el("img", { src: "/images/title.png", alt: "title" }),
                            el("p.subtitle", "Free Mint August 15th 9~10PM KST | 12~1PM UTC"),
                        ),
                        el(".info-container",
                            el(".info",
                                el("h6", "Minted"),
                                el("p", "1"),
                            ),
                            el(".info",
                                el("h6", "Price"),
                                el("p", "1"),
                            ),
                        ),
                        el(".wallet-info",
                            el("p", "0xab...123"),
                            el("a", "Connect Wallet"),
                        ),
                        el("img.mobile-crypto", { src: "/images/mobile-crypto-punk.png", alt: "mobile-crypto-punk" }),
                        el(".caption", "> Special thanks to CryptoPunk holders \n@johnkarp, @gwendall, @DanPolko, \n@punk8621 @dvdd_by_zero @nftcurie1 \n\n< Commercial rights supported by Punks\n8569, 3473, 3817, 2113, 4291, 4200,\n8621, 2560, 3999, 5289"),
                    ),
                ),
                el("img.bottom-image", { src: "/images/koreans-bottom.png", alt: "koreans" }),
            ),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}