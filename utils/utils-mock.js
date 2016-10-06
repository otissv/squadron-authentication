'use strict';

export function find (query, mock) {
  if (Array.isArray(query)) return [ mock.find(a => query.find(q => q._id === a._id)) ];
  if (query._id) return mock.filter(item => item._id === query._id)[0];
  return mock;
};

export function findById (query, mock) {
  if (query._id) return mock.filter(item => item._id === query._id)[0];
  return mock.filter(item => item._id === query)[0];
};

export function findOne (mock) {
  return mock[0];
};


export default {
  find,
  findById,
  findOne
}
