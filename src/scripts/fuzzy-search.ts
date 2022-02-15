import Fuse from 'fuse.js';

function search(query: string, json: any, keys: string[]): any[] {
  if (!json) return [];

  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.8,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: keys
  };

  const fuse = new Fuse(json, options);
  const result = fuse.search(query);
  return result.slice(0, 10).map(x => x.item);

}

export { search };