export type Set = {
  to: string;
  from: string;
};

export const sets: Set[] = [
  { to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]' },
  { to: 'c', from: '[ÇĆĈČ]' },
  { to: 'd', from: '[ÐĎĐÞ]' },
  { to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]' },
  { to: 'g', from: '[ĜĞĢǴ]' },
  { to: 'h', from: '[ĤḦ]' },
  { to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]' },
  { to: 'j', from: '[Ĵ]' },
  { to: 'ij', from: '[Ĳ]' },
  { to: 'k', from: '[Ķ]' },
  { to: 'l', from: '[ĹĻĽŁ]' },
  { to: 'm', from: '[Ḿ]' },
  { to: 'n', from: '[ÑŃŅŇ]' },
  { to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]' },
  { to: 'oe', from: '[Œ]' },
  { to: 'p', from: '[ṕ]' },
  { to: 'r', from: '[ŔŖŘ]' },
  { to: 's', from: '[ßŚŜŞŠ]' },
  { to: 't', from: '[ŢŤ]' },
  { to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯμ]' },
  { to: 'w', from: '[ẂŴẀẄ]' },
  { to: 'x', from: '[ẍ]' },
  { to: 'y', from: '[ÝŶŸỲỴỶỸ]' },
  { to: 'z', from: '[ŹŻŽ]' },
  { to: '-', from: "[·/_,:;']" },
];
