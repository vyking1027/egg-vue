// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportTop from '../../../app/model/top';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Top: ReturnType<typeof ExportTop>;
  }
}
