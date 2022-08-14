import { DomNode, el, msg, Popup } from "skydapp-browser";
import Klip from "../../klaytn/Klip";

export default class ConnectWalletPopup extends Popup {

    public content: DomNode;

    constructor(callback: () => void) {
        super(".popup-background");
        this.append(
            this.content = el(".connect-wallet-popup",
                el("h2", msg("CONNECT_WALLET_TITLE")),
                el("p", msg("CONNECT_WALLET_DESC")),
                el(".button-container",
                    el("a.connect-kaikas-button",
                        el("img", { src: "/images/icn/kaikas.svg" }),
                        msg("CONNECT_WALLET_BUTTON1"),
                        { href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi" },
                    ),
                    el("a.connect-klip-button",
                        el("img", { src: "/images/icn/klip.svg" }),
                        msg("CONNECT_WALLET_BUTTON2"),
                        {
                            click: async () => {
                                await Klip.connect();
                                callback();
                                this.delete();
                            },
                        },
                    ),
                    el("a.button.cancel-button", msg("CONNECT_WALLET_BUTTON3"), {
                        click: () => this.delete(),
                    }),
                ),
            ),
        );
    }
}