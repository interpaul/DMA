[![Stories in Ready](https://badge.waffle.io/IDTdesign/dma.png?label=ready&title=Ready)](https://waffle.io/IDTdesign/dma)
# Static pages of DMA

## Platform & Components

To run this site locally you should have installed:

* [Node.js](http://nodejs.org/)

* [GIT](http://git-scm.com/download)

    **IMPORTANT.** When installing GIT on Windows, make sure you install with the option of making git available to the windows command line.

    ![Git options](https://github.com/IDTdesign/idtprime.com/raw/master/docs/images/readme-git-options.PNG)

See also [instruction](http://bevry.me/learn/node-install) for setting up Node.js environment under Mac Os and Linux.

### Install / update DocPad

On Windows:

1. Run 'Node.js command promt' as Administrator.  
    ![Node.js command promt](https://github.com/IDTdesign/idtprime.com/raw/master/docs/images/readme-run-node-js-command-promt.png)
2. Type `npm install -g npm` and press «Enter» to update Node Package Manager.
3. Type `npm install -g docpad@6.64` and press «Enter» to install DocPad globally.
4. Close Node.js command promt, run Windows command promt (cmd) as regular user and navigate to your folder with project.
5. Run `docpad update` inside your project directory to ensure that your local installations of DocPad and its plugins are updated to their latest compatible versions.

For other systems check [manual](http://docpad.org/docs/install) at official site.

## Running DocPad locally

`docpad run` in **cmd** inside your project directory to compile the site, start the webserver and watch for changes.

To preview site in browser open [http://localhost:9778](http://localhost:9778)

[Full list](http://docpad.org/docs/cli) of commands.

## Developing

`src/document` — content pages  
`src/layout`   — template of the site  
`src/partials` — includes used in templates  
`src/files`    — resources

More docs at [DocPad site](http://docpad.org/docs/overview).

## Deploy

### Deploy Setting

Open command promt and run `git remote add deploy https://YOURUSERNAME:YOURPASSWORD@github.com/IDTdesign/DMA.git` where *YOURUSERNAME* , *YOURPASSWORD* is your github credentials.

### Deploying Site

Run `docpad deploy-ghpages --env static` inside your project directory to compile the site and push it to [http://idtdesign.github.io/DMA/](http://idtdesign.github.io/DMA/).

You should be collaborator in this repository to be able to deploy.

## Troubleshooting

In case of any problems try first to [update DocPad](#install--update-docpad).


## License
IDT &copy; 2014+ All rights reserved.
