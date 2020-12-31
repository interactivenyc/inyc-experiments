#cd Projects 

echo "***************************************************"
echo "loading .bash_profile - $(date +%b-%d.%H:%M:%S)"
pwd
echo "***************************************************"

export CLICOLOR=1
export LSCOLORS=ExFxCxDxBxegedabagacad

alias ls="pwd;ls -la"
alias lsl="echo '';ls -1; echo ''"
alias top="top -n 40 -o user -O rsize -stats pid,user,command,cpu,rsize,vsize,time"
alias topcpu="top -n 20 -o cpu -s 2 -stats pid,user,command,cpu,rsize,vsize,time"

alias openp="open ~/.bash_profile"
alias loadp=". ~/.bash_profile"

alias aliases=showAliases
alias functions=showFunctions
alias cls='reset'
alias rwf='resetWifi'

alias freq='cut -f1 -d" " ~/.bash_history | sort | uniq -c | sort -nr | head -n 30'


# kill multiple adb servers
alias killadb="pkill -f adb"


# Start simple python webserver
alias runWebServerHere="python -m SimpleHTTPServer"
alias killWebServerHere="pkill -f python"


# list files and folders recursively from this path
alias listFilesAndFolders='ls -R | grep ":$" | sed -e '\''s/:$//'\'' -e '\''s/[^-][^\/]*\//--/g'\'' -e '\''s/^/   /'\'' -e '\''s/-/|/'\'''


#delete .DS_Store files recursively from this path
alias cleanDSStore="find . -name '*.DS_Store' -type f -delete"

#add timestamp to ping
# [PASTE INTO SHELL] ping yahoo.com | while read line; do echo $line - `date '+%H:%M:%S'`; done


# Add to PATH
#export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
#export PATH="$PATH:/opt/gradle/bin"
#export PATH=$PATH:/Applications/DiffMerge.app/Contents/MacOS


#export JAVA_HOME='/Library/Java/Home'
# alias setJdk6='export JAVA_HOME=$(/usr/libexec/java_home -v 1.6)'
# alias setJdk7='export JAVA_HOME=$(/usr/libexec/java_home -v 1.7)'
# alias setJdk8='export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)'
# setJdk8


function resetWifi {
	networksetup -setairportpower en0 off
	networksetup -setairportpower en0 on
}

function goProjects {
    cd ~/Projects 
}


function showNodeModules() {
    open /usr/local/lib/node_modules
}



##########################################################################
# CORE UTILITIES
##########################################################################


#Autocomplete from history
bind '"\e[A": history-search-backward'
bind '"\e[B": history-search-forward'


function showAliases(){
     echo "***************************************************"
     echo ALIASES IN .bash_PROFILE
     echo "***************************************************"
     alias
     echo "***************************************************"
}


function showFunctions(){
     echo "***************************************************"
     echo FUNCTIONS IN .bash_PROFILE
     echo "***************************************************"
     cat ~/.bash_profile | grep function | grep \(\)
     echo "***************************************************"

     showAliases
}



function listFiles(){
     find . -name $1 -exec ls {} \;
}



function deleteFiles(){
     find . -name $1 -exec rm -rf {} \;
}


function dateWithFormat(){
     echo $(date +%y-%b-%d-%s)
}


function createSSHKeys(){
     ssh-keygen -t dsa
}


function replaceUsingAWK(){
     match=$2
     replace=$3
     echo ${1//$match/$replace}
}


function showHiddenFiles(){
     defaults write com.apple.finder AppleShowAllFiles TRUE
     killall Finder
}


function hideHiddenFiles(){
     defaults write com.apple.finder AppleShowAllFiles FALSE
     killall Finder
}


function zipdir(){ # usage - zipdir $foldername
     match=/
     repl=
     dirname=${1//$match/$repl}
     zip -r $dirname $dirname -x "*svn*" -x "*.DS"
}


function zipNoCompress(){
     zip -r0 $2 $1
}




#This function will copy only changed files from one folder to another, excluding DS_Store and .svn files
#usage - updateFilesInFolders $sourceDirectory $destDirectory
function updateFilesInFolders(){
     rsync -e ssh -v -r -t -u --progress --stats --exclude .DS* --exclude .svn* $1/* $2/
}




function findRecursive(){
     find . -name $1
}




##########################################################################
# GIT FUNCTIONS
##########################################################################


#alias gs="git status" #N.B. Overrides ghostscript (probably not important if you don't use it)
alias gs=gitStatus;
 
alias gl="git log --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --name-status"
alias gl2="git log --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
alias gl3='git log --graph --full-history --all --color --pretty=format:"%x1b[31m%h%x09%x1b[32m%d%x1b[0m%x20%s"'
alias gl4="git log --graph --all --color --abbrev-commit"
 
alias gp="git pull"
alias gc='echo git commit -am \"'
alias gd="git diff"
alias gb="git branch -a"


#SUBVERSION ANALOGS
alias sl="svn log --verbose | more"
 
function gitStatus(){
        clear;
       
        currentBranch=( `git rev-parse --abbrev-ref HEAD`);
              
        echo ${underline}${white}***************************************************${reset}
        echo ${white}git status - $currentBranch ${reset}
        echo ${underline}${white}***************************************************${reset}
 
        echo ${underline}${white}git status${reset}
               git status;
 
        echo ${underline}${white}files to be pushed${reset}
               git diff --stat origin/$currentBranch;
 
        echo ${underline}${white}commits to be pushed${reset}
               git log --color --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' origin/$currentBranch..HEAD --abbrev-commit --name-status
 
        echo;
        return;
}




##########################################################################
# SYSTEM UTILITIES
##########################################################################




alias delayStickies="defaults write com.apple.Stickies NSInitialToolTipDelay -int 10000"
alias disableWarningChangeFileExtension="defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false"
 


##########################################################################
# COLORIZE PROMPT
##########################################################################




#PS1="$yellow[\!] $white[\@] $yellow[./\\w]\$green\\n$white\u $ $reset"
PS1="\[$yellow\][\!] \[$reset\]\[$white\][\@] \[$reset\]\[$yellow\][./\\w]\[$reset\]\[$green\]\\n\[$white\][\u] \[$reset\]"
#PS1='\[$green$bold\]\h\[$reset\]:\[$yellow\]\w\[$reset\]\$ '
PS2="> "
#White Text on Blue BG
#[\e[0;4;37;44m\]








##########################################################################
# COLORIZING OUTPUT USING TPUT and Bash Colors
##########################################################################
 


# Text color variables
        underline=$(tput sgr 0 1)          # Underline
        bold=$(tput bold)             # Bold
        red=${bold}$(tput setaf 1) #  red
        green=${bold}$(tput setaf 2) #  green
        yellow=${bold}$(tput setaf 3) #  gold
        blue=${bold}$(tput setaf 4) #  blue
        white=${bold}$(tput setaf 7) #  white
        reset=$(tput sgr0)             # Reset
        info=${white}*${txtrst}        # Feedback
        pass=${blue}*${txtrst}
        warn=${red}*${txtrst}
        ques=${blue}?${txtrst}




#calling this function will display all tput colors that are available


function tputcolors(){
 
        #!/bin/bash
        # tputcolors
 
        echo
        echo -e "$(tput bold) reg  bld  und   tput-command-colors$(tput sgr0)"
 
        for i in $(seq 1 7); do
          echo " $(tput setaf $i)Text$(tput sgr0) $(tput bold)$(tput setaf $i)Text$(tput sgr0) $(tput sgr 0 1)$(tput setaf $i)Text$(tput sgr0)  \$(tput setaf $i)"
        done
 
        echo ' Bold            $(tput bold)'
        echo ' Underline       $(tput sgr 0 1)'
        echo ' Reset           $(tput sgr0)'
        echo
 
}


 
#calling this function will display all bash colors that are available - with backgrounds


function bashcolors(){
        #!/bin/bash
        # bashcolors
        #   This file echoes a bunch of color codes to the
        #   terminal to demonstrate what's available.  Each
        #   line is the color code of one forground color,
        #   out of 17 (default + 16 escapes), followed by a
        #   test use of that color on all nine background
        #   colors (default + 8 escapes).
        #
        T='gYw'   # The test text
 
        echo -e "\n                 40m     41m     42m     43m     44m     45m     46m     47m";
 
        for FGs in '    m' '   1m' '  30m' '1;30m' '  31m' '1;31m' '  32m' \
                   '1;32m' '  33m' '1;33m' '  34m' '1;34m' '  35m' '1;35m' \
                   '  36m' '1;36m' '  37m' '1;37m';
          do FG=${FGs// /}
          echo -en " $FGs \033[$FG  $T  "
          for BG in 40m 41m 42m 43m 44m 45m 46m 47m;
            do echo -en "$EINS \033[$FG\033[$BG  $T  \033[0m";
          done
          echo;
        done
}








##########################################################################
# TESTING LOOP THROUGH TEXT FILE
##########################################################################




function arrayTest(){




     # 1 OF 2 WAYS TO LOOP THROUGH A TEXT FILE
     filecontent=( `cat "duplist.txt"`)
     for t in "${filecontent[@]}"
          do
               echo $t
          done
         
     # 2 OF 2 WAYS TO LOOP THROUGH A TEXT FILE
     cat duplist.txt | while read LINE
     do
          echo $LINE
     done


     #CREATE ARRAY FROM STRING SEPARATED BY "/"
     IFS='/' read -a array <<< "$LINE"
    
     #ECHO ENTIRE ARRAY
     echo "${array[@]}"
    
     #LENGTH OF THE ARRAY
     echo ${#array[@]}
    
     #ECHO LAST LINE OF ARRAY
     echo "${array[${#array[@]}-1]}"
    
     #LOOP THROUGH ITEMS IN ARRAY
     for element in "${array[@]}"
          do
               echo $element
          done
}








##########################################################################
# FDUPES CONVENIENCE FUNCTIONS
##########################################################################

function makeDupList(){
 fdupes --recurse --omitfirst $1 > duplist.txt
}


function copyDupFiles(){
 cat duplist.txt | while read LINE
  do
   if [ "$LINE" == "" ]
   then echo ""
   else


    IFS='/' read -a array <<< "$LINE"


    thisfile="${array[${#array[@]}-1]}"
    #echo $thisfile
    unset array[${#array[@]}-1]


    SAVE_IFS=$IFS
    IFS='/'
    thispath="${array[*]}"/
    IFS=$SAVE_IFS


    echo $thispath$thisfile


    mkdir -p "./temp/dupes"


    #cp "$thispath$thisfile" "./temp/dupes/"


   fi
  done
}




function deleteDupFiles(){
     cat duplist.txt | while read LINE
     do
          if [ "$LINE" != "" ]
               then echo "deleting:" $LINE
               rm "$LINE"
          fi
     done
}






##########################################################################
# SMARTFOX SERVER UTILS
##########################################################################




function sfs(){
     if [ "$1" == "tail" ]; then
          tail -f /Applications/SmartFoxServerPRO_1.6.6/Server/logs/wrapper_20120421.log
     elif [ "$1" == "start" ]; then
          /Applications/SmartFoxServerPRO_1.6.6/Server/sfs start
     elif [ "$1" == "stop" ]; then
          /Applications/SmartFoxServerPRO_1.6.6/Server/sfs stop
     elif [ "$1" == "restart" ]; then
          /Applications/SmartFoxServerPRO_1.6.6/Server/sfs restart
     elif [ "$1" == "status" ]; then
          /Applications/SmartFoxServerPRO_1.6.6/Server/sfs status
     else
          echo found something else
     fi
}




function logAFPActivity(){
     sudo serveradmin settings afp:activityLog=yes
}












##########################################################################
# RSYNC UTILS
##########################################################################




function tempCopy(){
     SRC="/Volumes/M-OSX-Backups/Users/stevewarren/Pictures/iPhoto-2011/*"
     DEST="/Users/stevewarren/Pictures/iPhoto-2011/"
     LOG_FILE="tempCopy"


     rsyncCopy $SRC $DEST $LOG_FILE
}




function backupClients(){
     SRC="/Users/stevewarren/Clients*"
     DEST="/Volumes/Red_Pill/stevewarren-redpill/"
     LOG_FILE="backupClients"


     rsyncCopy $SRC $DEST $LOG_FILE
}




function backupClientsToDrobo(){
     SRC="/Volumes/Red_Pill/stevewarren-redpill/Clients*"
     DEST="/Volumes/M-OSX-Backups/Users/stevewarren/"
     LOG_FILE="backupClientsToDrobo"


     rsyncCopy $SRC $DEST $LOG_FILE
}




function backupPhotosToDrobo(){
     SRC="/Volumes/Red_Pill/stevewarren-redpill/Pictures*"
     DEST="/Volumes/M-OSX-Backups/Users/stevewarren/"
     LOG_FILE="backupPhotosToDrobo"


     rsyncCopy $SRC $DEST $LOG_FILE
}




function backupPhotosToRedPill(){
     SRC="/Users/stevewarren/Pictures/Photos*"
     DEST="/Volumes/Red_Pill/stevewarren/Pictures/"
     LOG_FILE="backupPhotosToDrobo"


     rsyncCopy $SRC $DEST $LOG_FILE
}




function backupITunesToRedPill(){
     SRC="/Users/stevewarren/Music/iTunes*"
     DEST="/Volumes/Red_Pill/stevewarren/Music/iTunes/"
     LOG_FILE="backupPhotosToDrobo"


     rsyncCopy $SRC $DEST $LOG_FILE
}




function backupProjectsToDrobo(){
     SRC="/Volumes/Red_Pill/stevewarren-redpill/Projects*"
     DEST="/Volumes/M-OSX-Backups/Users/stevewarren/"
     LOG_FILE="backupProjectsToDrobo"


     rsyncCopy $SRC $DEST $LOG_FILE
}




function rsyncCopy(){
     LOG_PATH=$HOME/.logs/$LOG_FILE-$(dateWithFormat).txt
     PARAMS="-e ssh -v -r -t -u --size-only --progress --stats --exclude .DS*"


     echo SRC = $SRC
     echo DEST = $DEST
     echo LOG_PATH = $LOG_PATH
     echo PARAMS = $PARAMS


     #THE COMMAND tee OUTPUTS TO BOTH STDOUT AND A FILE
     rsync $PARAMS $SRC $DEST | tee $LOG_PATH
}




function deleteLogs(){
     rm $HOME/.logs/*
}















export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
