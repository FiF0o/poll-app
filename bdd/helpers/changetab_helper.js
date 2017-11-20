
'use strict';

class Modal extends Helper {

  changeTab(num) {
    let client = this.helpers['WebDriverIO'].browser;
    return client
        .getTabIds(function (err, handles) {
            // this.switchTab(handles[num - 1]);
            this.switchTab();
            return;
        })
  }

}

module.exports = Modal;
