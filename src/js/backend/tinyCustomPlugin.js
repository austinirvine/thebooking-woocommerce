tinymce.PluginManager.add('tbk-hooks', function (editor, url) {
    const hookIcon = '<svg id="bb062fb5-315e-444b-a3a8-00ae702f7213" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32px"><title>tbk-hook-mce-icon</title><path id="ca984e1e-714f-4a84-afbf-3b4a1e88dc8e" data-name="d95zhFVama" d="M289.86,64L222.14,448" style="fill-opacity:0;stroke:#6997e4;stroke-width:20px"/><path d="M60.46,398.26V130.92h64.88v24.33H99V373.93h26.36v24.33H60.46Z" style="fill:#262626"/><path d="M145,398.26V130.92h64.88v24.33H183.56V373.93h26.36v24.33H145Z" style="fill:#262626"/><path d="M304.34,398.26V373.93h26.36V155.25H304.34V130.92h64.88V398.26H304.34Z" style="fill:#262626"/><path d="M388.91,398.26V373.93h26.36V155.25H388.91V130.92h64.88V398.26H388.91Z" style="fill:#262626"/></svg>';
    editor.ui.registry.addIcon('tbk-hooks', hookIcon);
    editor.ui.registry.addMenuButton('tbk-hooks', {
        icon : 'tbk-hooks',
        fetch: function (callback) {
            const items = editor.getParam('dynamicHooks');

            let callbackItems = [];

            for (const [key, value] of Object.entries(items)) {
                const subItems = [];
                for (let i = 0; i < value.length; i++) {
                    const subItem = {
                        type    : 'menuitem',
                        text    : value[i].label,
                        content : value[i].value,
                        icon    : 'tbk-hooks',
                        onAction: function (counter, items) {
                            return function () {
                                editor.insertContent('[' + items[counter].value + ']');
                            }
                        }(i, value)
                    }
                    subItems.push(subItem);
                }

                callbackItems.push({
                    type           : 'nestedmenuitem',
                    text           : key,
                    getSubmenuItems: function (list) {
                        return function () {
                            return list;
                        }
                    }(subItems)
                })
            }

            callback(callbackItems)
        }
    });
})