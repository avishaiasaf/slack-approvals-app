const { Md, Header, Divider, Section, Elements, Actions } = require("slack-block-builder");
const { Enums, HelperFunctions } = require("../../utilities");

const header = (currentTab, username) => {
    return [
        Section({
            text: `Hi ${HelperFunctions.titleizeUserName(username)}, what can I do for you today?`,
        }),
        Divider(),
        Actions({ blockId: "tester" }).elements(
            Elements.Button({
                text: Enums.TABS.APPROVAL_APP.text,
            })
                .value(Enums.TABS.APPROVAL_APP.value)
                .actionId(Enums.TABS.APPROVAL_APP.actionId)
                .primary(Enums.TABS.APPROVAL_APP.value === currentTab),
            Elements.Button({
                text: Enums.TABS.ANOTHER_APP.text,
            })
                .value(Enums.TABS.ANOTHER_APP.value)
                .actionId(Enums.TABS.ANOTHER_APP.actionId)
                .primary(Enums.TABS.ANOTHER_APP.value === currentTab)
        ),
        Divider(),
    ];
};

module.exports = header;
