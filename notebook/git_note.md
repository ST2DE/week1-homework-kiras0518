## Git 教學

Git是什麼？
git是一種版本控制系統，同樣為版本控制的還有SVN
透過這樣的版本控制系統，可以清楚的記錄每個檔案是誰在什麼時候加進來、什麼時候被修改或刪除。

### 建立github專案
如果在github上有專案的話可以先clone回來，這樣就可以直接remote了
```
建立新的目錄，並且Git初始化
mkdir 資料夾名稱
cd project
git init
git clone 你的專案網址
```
好了之後
```
git status //看狀態
```
Untracked files的話是全新的檔案，尚未被提交過

```
git add 你的檔案
git add . //將所有有更動的檔案提交
```
這邊記住一點！！！！！！
Git 在計算、產生物件的時候，是根據「檔案的內容」去做計算的，所以光是新增一個目錄，Git 是沒辦法處理它的。
**空的目錄無法被提交！**

所以請讓你的目錄裡面有東西

提交完之後再用git status看一次，你的狀態會變成Changes to be committed

好了之後
```
git commit -m "直接輸入訊息"
git push
```

就完成了

## 其他指令
:w 存擋
:q 離開
:wq 純黨離開
### .gitigore 忽略檔案

.gitignore 作用範圍包含整個資料夾以及其所有子資料夾
.gitignore 也可以存在多個資料夾中
每個資料夾都可以另外定義 .gitignore 的內容

## git log 紀錄檔/git diff 比較

```
git log//按q可跳出瀏覽

```
## git rm
```
git rm
```
將檔案刪除

## git mv
``` 
git mv 檔案名 資料夾
```
搬移檔案，這樣就不用add或rm檔案了


## git rebase
``` 
git rebase
```
將不同分支上的差異點合併成一個新的commit

## git config
```
git config --global
```
設定初始參數
``` 
git config --list
```
可查看設定的參數




