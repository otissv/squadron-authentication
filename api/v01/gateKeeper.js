import roles from './roles';

export default function gateKeeper (role, action) {
  return roles[role || 'admin'].includes(action);
};
