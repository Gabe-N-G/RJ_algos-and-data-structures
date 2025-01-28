/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const sToTMap = {},
    tToSMap = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check if there's a conflict in s -> t mapping
    if (sToTMap[charS] && sToTMap[charS] !== charT) {
      return false;
    }

    // Check if there's a conflict in t -> s mapping
    if (tToSMap[charT] && tToSMap[charT] !== charS) {
      return false;
    }

    // Add the mappings
    sToTMap[charS] = charT;
    tToSMap[charT] = charS;
  }

  return true;
};
