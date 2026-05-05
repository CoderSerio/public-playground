/**
 * Utility Helper Functions
 */

/**
 * 格式化日期
 */
function formatDate(date) {
  return new Date(date).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
}

/**
 * 生成简易 UUID
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

module.exports = { formatDate, generateId };
