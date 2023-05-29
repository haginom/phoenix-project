export function mapEdgesToNodes(data) {
  if (!data?.edges) return [];
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

export function filterByProperty(data, property, value) {
  const filteredArray = data.filter((item) => item[property] === value);
  if (filteredArray.length === 1) {
    return filteredArray[0];
  } else {
    return filteredArray;
  }
}

export function splitArray(arr) {
  const result = [];
  let subarray = [];

  for (const item of arr) {
    subarray.push(item);

    if (subarray.length >= 2 && result.length < 2) {
      result.push(subarray);
      subarray = [];
    } else if (subarray.length >= 1 && result.length >= 2) {
      result.push(subarray);
      subarray = [];
    }
  }

  if (subarray.length > 0) {
    result.push(subarray);
  }

  return result;
}

export function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
}
