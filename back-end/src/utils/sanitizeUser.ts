function sanitizeUser(user: any) {
  if (!user) return null;
  const { password, ...safe } = user;
  return safe;
}

module.exports = sanitizeUser;
