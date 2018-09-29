import { slugify } from './index';

describe('slugify', () => {
  it('should slug our simple string', () => {
    const originalText = 'ŚŢrIŅg';
    expect(slugify(originalText)).toBe('string');
  });

  it('should slug our movie title', () => {
    const movie: any = {
      title: 'Star Wars: Episode VIII - The Last Jedi'
    };
    expect(slugify(movie.title)).toBe('star_wars_episode_viii_the_last_jedi');
  });

  it('should return an empty string if it is null or undefined', () => {
    let object: any = {
      name: null
    };
    expect(slugify(object.name)).toBe('');
    expect(slugify(object.invalidPropety)).toBe('');
  });
});
