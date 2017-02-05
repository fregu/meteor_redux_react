'use strict';

/**
 * Dependencies
 */
import path from 'path';
import dotenv from 'dotenv';
import './methods';
import './publications';

/**
 * Configuration
 */
dotenv.load({
  path: path.resolve(process.env.PWD, '.env')
});
