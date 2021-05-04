import CloudConvertModule from 'cloudconvert';
import { NextFunction, Request, Response } from 'express';

import { CloudConvert } from './Types/cloudConvert';
import { Settings } from './Types/settings';

export { Settings } from './Types/settings';
export type { CloudConvert } from './Types/cloudConvert';

declare global {
  namespace Express {
    interface Request {
      cloudConvert: CloudConvert;
    }
  }
}

export default (settings: Settings) => {
  const cloudConvert: CloudConvert = new CloudConvertModule(settings.apiKey);

  return (req: Request, res: Response, next: NextFunction) => {
    req.cloudConvert = cloudConvert;

    next();
  };
};
