/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */
'use strict';

module.exports = (result,message)=>{
  const User = require('../../../model/User');
  return new Promise((resolve,reject)=>{
    result.Task = User.findOne({id:message.id});
    result.User === undefined?reject(new Error('User Not Found')):resolve(result);
  });
}