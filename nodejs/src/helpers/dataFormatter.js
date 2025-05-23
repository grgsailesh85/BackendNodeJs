export function formatUserData(data) {
  return {
    address: data.address,
    createdAt: data.createdAt,
    email: data.email,
    id: data.id,
    name: data.name,
    phone: data.phone,
    roles: data.roles,
    profileImageUrl: data.profileImageUrl,
  };
}
