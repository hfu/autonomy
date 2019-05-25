task :default do
  sh "hjson -j style.hjson > style.json"
  sh "hjson -j data.hjson > data.json"
  sh "browserify -o bundle.js -t [ babelify --presets [ @babel/preset-env ] ] app.js"
end

task :budo do
  sh "budo --open"
end
