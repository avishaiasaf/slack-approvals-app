const { Blocks, Elements, Modal } = require("slack-block-builder");
// const { Enums } = require("../../utilities");

module.exports = async (imageUrl, title) => {
    return Modal({
        title: "Vendor Bills",
        close: "Close",
        callbackId: "vendor-bills-chart-modal",
    })
        .blocks(
            Blocks.Section({ text: "Please select the vendor below:" }),
            Blocks.Divider(),
            Blocks.Image()
                .imageUrl(imageUrl)
                .title(title)
                .altText("Bills per Month")
        )
        .buildToJSON();
};
