const ini = require('../')
const t = require('tap')

t.test('does not split section dots inside quotes', t => {
  const data = ini.parse(`
[submodule "public/mks/parts/mks-Grove125KHzRFIDReader-V1.0"]
path = public/mks/parts/mks-Grove125KHzRFIDReader-V1.0
url = https://github.com/Make-Your-School/mks-Grove125KHzRFIDReader-V1.0.git
`)

  t.same(data, {
    'submodule "public/mks/parts/mks-Grove125KHzRFIDReader-V1.0"': {
      path: 'public/mks/parts/mks-Grove125KHzRFIDReader-V1.0',
      url: 'https://github.com/Make-Your-School/mks-Grove125KHzRFIDReader-V1.0.git',
    },
  })
  t.end()
})
