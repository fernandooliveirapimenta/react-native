//ios
colar o GoogleService-info.plist no diretorio raiz do projeto {projeto}/ios
no excode arrastar para a raiz do projeto
shell: yarn add react-native-firebase
shell: react-native link react-native-firebase
cd ios/
shell: pod init
vim://delet tvOsTests do arquivo Podfile
shell: pod install
vim:// descomentar platform :ios , '9.0' do Podfile
shell: pod install
shell: open {projeto}/ios/{projet}.xcworkspace
vim://no Podfile add as dependencias do firebase
shell: pod install
xcode: AppDelegate.h add #import <Firebase.h>
xcode: AppDelegate.m add na primeira linha do metodo didFinesh** [FIRApp configure]

