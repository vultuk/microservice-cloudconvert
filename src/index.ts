import CloudConvert from 'cloudconvert';
import {NextFunction, Request, Response} from 'express';

import {CloudConvert as CloudConvertType} from './Types/cloudConvert';
import {Settings} from './Types/settings';

export { Settings } from './Types/settings';

declare global {
  namespace Express {
    interface Request {
      cloudConvert: CloudConvertType;
    }
  }
}

export default (settings: Settings) => {
  const cloudConvert: CloudConvertType = new CloudConvert(settings.apiKey);

  return (req: Request, res: Response, next: NextFunction) => {
    req.cloudConvert = cloudConvert;

    next();
  };
};
