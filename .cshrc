#
# This is a template, default .cshrc file.  It customizes your shell environment.  Feel free to customize.
#
 
#
# Default permissions: 022 = readable to everyone (web like), 077 = closed to world (choose one for default)
#
#umask 022
#umask 077
# Use system umask, leave above commented out
 
set path=( /usr/bin /usr/local/bin /bin /usr/local/php5/bin )
# uncomment to include $HOME/bin into path, if it exists
#if ( -e $HOME/bin ) then
#    set path=( $path $HOME/bin )
#endif
 
setenv JAVA_HOME /usr/java
setenv MANPATH /usr/man:/usr/local/man
 
#
# LD_LIBRARY_PATH: for code compilation, uncomment ONLY if necessary
#  option 1: general use
#  option 2: to run PHP as CLI
#
#setenv LD_LIBRARY_PATH '/usr/lib:/usr/openwin/lib:/usr/dt/lib:/usr/local/lib:/usr/local/ssl/lib:/usr/local/lib/mysql'
#setenv LD_LIBRARY_PATH '/usr/local/lib:/usr/lib:/usr/openwin/lib:/usr/dt/lib:/usr/local/ssl/lib:/usr/local/lib/mysql'
 
if ( $?prompt ) then
 
    # EDITOR:  vi, vim, pico, ... (choose one)
    #setenv EDITOR /bin/vi
    #setenv EDITOR /usr/local/bin/pico
#    setenv EDITOR /usr/local/bin/vim
#    alias vi /usr/local/bin/vim
 
    # PAGER: more, less, ... (choose one)
    setenv PAGER /bin/more
    #setenv PAGER /bin/less
 
    alias vt100 "set term = vt100"
 
    set history = 100
    set savehist = 100
    set notify
    set filec
 
    set autolist
    set color
    set colorcat
 
    alias l    'ls -Fs'
    alias ll   'ls -l'
    alias lll  'ls -Fas'
    alias dir  'ls -al'
    alias cd.. 'cd ..'
 
    alias ns   'nslookup'
    alias pss  'ps -ef | grep -v grep | grep '
    alias ly   'lynx -source'
    alias f    'finger'
    alias t    'talk'
    alias md   'mkdir'
    alias rd   'rmdir'
    alias cls  'clear'
    alias rm   'rm -i'
    alias ^L   'clear'
    alias j    'jobs'
 
    alias ofw  'find $HOME/www -type d -exec chmod g+rx,o+rx {} \; ; find $HOME/www ! -type d -exec chmod g+r,o+r {} \;'
 
   if ( "`/bin/env | grep STY=`" == "" ) then 
        set prompt="`hostname`{`/usr/bin/whoami`}\!: "
    else
        set screen=`echo $STY|awk -F. '{print $2}'`
        set prompt="`hostname` $screen {`/usr/bin/whoami`}\!: "
    endif
 
        stty sane
endif

