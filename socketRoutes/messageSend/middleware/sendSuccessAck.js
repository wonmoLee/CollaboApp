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

module.exports = (messageObject,message,ack)=>{

  message.result = messageObject;
  message.isSuccess = true;
  message.Error = undefined;
  ack(message);
  return Promise.resolve();
};