const t = require('tap')
const ini = require('..')

// files saved as "UTF-8 with BOM" (e.g. by Notepad) start with U+FEFF
t.same(ini.decode('﻿[section]\nkey=value\n'), {
  section: { key: 'value' },
})

t.same(ini.decode('﻿[a]\r\nx=1\r\n[b]\r\ny=2\r\n'), {
  a: { x: '1' },
  b: { y: '2' },
})

t.same(ini.decode('﻿key=value\n[section]\nother=1\n'), {
  key: 'value',
  section: { other: '1' },
})
