import { EggAppConfig } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

export default (appInfo: EggAppConfig) => {
  const config: any = {};

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  config.view = {
    cache: false
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/prodb',
      options: {
        useNewUrlParser: true,
      },
    }
  }

  config.vuessr = {
    layout: path.resolve(appInfo.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(appInfo.baseDir, 'app/view'),
    },
  };

  config.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(appInfo.baseDir, 'logs')
  };

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public')
  };

  config.keys = '123456';

  config.middleware = [
    'access',
    'global'
  ];

  return config;
};
