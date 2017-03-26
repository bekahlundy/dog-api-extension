exports.seed = function(knex, Promise) {
  return knex('photos').del()
  .then(() => {
    return Promise.all([
      knex('photos').insert({
        dogName: 'sandy bean',
        pic: 'https://unsplash.com/photos/D9XX3Cjoh2s',
      }),
      knex('photos').insert({
        dogName: 'sluggy',
        pic: 'https://unsplash.com/search/dog?photo=WicMLrOSVvY',
       }),
      knex('photos').insert({
        dogName: 'scruffy',
        pic: 'https://unsplash.com/search/dog?photo=aRDWbSwxC80',
      }),
      knex('photos').insert({
        dogName: 'fella',
        pic: 'https://unsplash.com/search/dog?photo=XE87arvN3oo',
      }),
      knex('photos').insert({
        dogName: 'wrinkles',
        pic: 'https://unsplash.com/search/dog?photo=BiqAZqMU2bM',
      }),
      knex('photos').insert({
        dogName: 'big ol\' yucko',
        pic: 'https://unsplash.com/search/dog?photo=iS0Aq3QPsJ4',
      }),
      knex('photos').insert({
        dogName: 'grey',
        pic: 'https://unsplash.com/search/dog?photo=pChE-f_gqVc',
      }),
      knex('photos').insert({
        dogName: 'dunston',
        pic: 'https://unsplash.com/search/dog?photo=bA-wQdy_SxI',
      }),
      knex('photos').insert({
        dogName: 'mr. fox',
        pic: 'https://unsplash.com/search/dog?photo=Fu8pblIzEL0',
      }),
      knex('photos').insert({
        dogName: 'magic',
        pic: 'https://unsplash.com/search/dog?photo=g56z-vE98B4',
      }),
      knex('photos').insert({
        dogName: 'princess slippy',
        pic: 'https://unsplash.com/search/dog?photo=JCXANpeR2XI',
      }),
      knex('photos').insert({
        dogName: 'froggy',
        pic: 'https://unsplash.com/search/dog?photo=5ylV-khwM9s',
      }),
      knex('photos').insert({
        dogName: 'titan',
        pic: 'https://unsplash.com/search/dog?photo=wCWhackqiQE',
      }),
      knex('photos').insert({
        dogName: 'gooble',
        pic: 'https://unsplash.com/search/dog?photo=U5rMrSI7Pn4',
      }),
      knex('photos').insert({
        dogName: 'moofasa',
        pic: 'https://unsplash.com/search/dog?photo=wT2RNG9_Jhw',
      }),
      knex('photos').insert({
        dogName: 'prince gertrude',
        pic: 'https://unsplash.com/search/dog?photo=Ugg-EIfzy0c',
      }),
      knex('photos').insert({
        dogName: 'oscar (the grouch)',
        pic: 'https://unsplash.com/search/dog?photo=xTJ4ZtPD__8',
      }),
      knex('photos').insert({
        dogName: 'pip',
        pic: 'https://unsplash.com/search/dog?photo=ocZ-_Y7-Ptg',
      }),
      knex('photos').insert({
        dogName: 'beauty queen',
        pic: 'https://unsplash.com/search/dog?photo=I1eeK67AXvI',
      }),
      knex('photos').insert({
        dogName: 'chunkers',
        pic: 'https://unsplash.com/search/dog?photo=vS12mpz3TNQ',
      }),
      knex('photos').insert({
        dogName: 'gooble\'s brother',
        pic: 'https://unsplash.com/search/dog?photo=3Bq5lBO1NsU',
      }),
      knex('photos').insert({
        dogName: 'yippy skippee',
        pic: 'https://unsplash.com/search/dog?photo=UlmPSBvHTY0',
      }),
      knex('photos').insert({
        dogName: 'brewski',
        pic: 'https://unsplash.com/search/dog?photo=BHh-jKrTIoU',
      }),
      knex('photos').insert({
        dogName: 'tiny',
        pic: 'https://unsplash.com/search/dog?photo=o1KOfZ_bEFA',
      }),
      knex('photos').insert({
        dogName: 'scoob',
        pic: 'https://unsplash.com/search/dog?photo=sssxyuZape8',
      }),
      knex('photos').insert({
        dogName: 'farfel',
        pic: 'https://unsplash.com/search/dog?photo=3lL_Nlvpl08',
      }),
      knex('photos').insert({
        dogName: 'bongo',
        pic: 'https://unsplash.com/search/dog?photo=3lL_Nlvpl08',
      }),
      knex('photos').insert({
        dogName: 'riff raff',
        pic: 'https://unsplash.com/search/dog?photo=z_eFLP9aS6s',
      }),
      knex('photos').insert({
        dogName: 'willard',
        pic: 'https://unsplash.com/search/dog?photo=z_eFLP9aS6s',
      }),
      knex('photos').insert({
        dogName: 'pat',
        pic: 'https://unsplash.com/search/dog?photo=_1qwPyCx3ik',
      }),
    ]);
  });
};
