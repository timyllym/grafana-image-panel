import _ from 'lodash';
import {PanelCtrl} from 'app/plugins/sdk';
import {impressions} from 'app/features/dashboard/impression_store';
import config from 'app/core/config';
import "./css/image.css!";

export class ImageCtrl extends PanelCtrl {
    constructor($scope, $injector, backendSrv) {
        super($scope, $injector);
    }

}

ImageCtrl.templateUrl = 'module.html';
