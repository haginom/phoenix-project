export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function splitArrayIntoGroups(array, groupSize) {
  const result = [];
  for (let i = 0; i < array.length; i += groupSize) {
    const group = array.slice(i, i + groupSize);
    result.push(group);
  }
  return result;
}