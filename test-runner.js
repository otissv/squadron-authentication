import glob from 'glob';
import path from 'path';
import Promise from 'bluebird';


const config = {
  base    : './',
  folder  : './backend/api',
  ext  : '-test.js',
  options : {
    ignore: './node_modules/**'
  }
};


function resolveBase (base, filePath) {
  return path.resolve(__dirname, `${base}${filePath}`);
};


function runTest (files) {
  files.forEach(file => {
    const tests = resolveBase(config.base, file);

    require(`${tests}`);
  });
}

function promisifyAsync (fn) {
  const request = Promise.promisifyAll(fn);

  return async function asyncTests () {
    await request.pretest();
    return;
  };
}


function requireFiles (config) {
  const ext = config.ext || '';
  const pattern = `${config.folder}/**/*${ext}`;


  glob(pattern, config.options, (err, files) => {
    if (err) {
      throw new Error(err);
    }

    runTest(files);

    // glob('./__tests__/pretests.js', (err, testPresets) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   if (testPresets[0] == null) {
    //     runTest(files);
    //
    //   } else {
    //     const request = promisifyAsync(require(testPresets[0]));
    //
    //     request().then(function (message) {
    //       runTest(files);
    //     }).catch(function (err) {
    //       console.log('error!', err);
    //     });
    //   }
    // });


  });
};

export default requireFiles(config);
