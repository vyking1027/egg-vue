// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportTop from '../../../app/controller/top';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    top: ExportTop;
  }
}
