---
id: Marimo Notebook instead of Jupyter Notebook
aliases: []
tags:
  - csci
  - python
  - programming
date: 2025-Jul-29
draft: true
title: Marimo Notebook
---

## Marimo Notebook instead of Jupyter Notebook

[Marimo notebook](https://marimo.io/) is a thing like Jupyter notebook.
[Jupyter notebook](https://jupyter.org/) itself is a web-app for creating and sharing documents, mostly computational documents.

I will talk about why I use Jupyter notebook, what I like about notebook, and why I started using Marimo notebook.

> Disclaimer: I really do think Jupyter notebook is a really great tool for a lot of things, the Jupyter team and the community make a great work around it.

Hey, at the end of the day, it is just a matter of preference and You always have to go with what You think the best for Your condition!

> [!NOTE]- Take a look! Expand me!
> <iframe src="https://kelreeeeey.github.io/marimo-gh-pages/computational_methods_for_geophysics/gravitational_response_of_a_ball.html?embed=true&show-chrome=false" width="100%" height="700" frameborder="0" </iframe>


### Why I Use Jupyter Notebook

[[How is it going so far#how-ive-been-crafting-my-way-through-programming-as-geophysics-student|I was a geophysics student]] when I discover Jupyter Notebook through my lab works.
Ofc, the first thing before notebook itself was Python.
The lab works require me to do programming stuff as part of the curriculum.
It was fun, tbh.
Most of my favourites things as geophysics student was coding after a lab work called "Computational Geophysics" started kicking in my 2nd semester.
Later i found out that the thing that keeping me coding back then was the ability to do such cool visualizations by writing code inside Jupyter Notebook.
Skip forward to 6th-7th semester, Python and coding in general started to take most of my attention.
The biggest indication is I took Machine Learning path at Google Bangkit Academy in 2022, which lead me to do some deep learning for subsurface data as my undergrad thesis project (I think i might write about it, too).
The next semester was a major milestone for me because I took somekinda interneship as part of a research team in my campus.
Most of the works that I do was related to deep leaerning and seismic data.
I definitely use notebook to do my works for obvious reason.
The ability to do write code and visualize thing in a single place is really important in my opinion.
In fact, most of data scientist especially earth scientist requires visualization skill to do their job.

All of those was great.
I use Obsidian as a tool to help me gather all of my works for monthly report so I made a small tool to convert my notebook to obsidian markdown that takes all of the cells' outputs and save them within the same sub directory within Obsidian vault.
It is in my github repo, [jupyternotebook-to-obsidian-vault](https://github.com/kelreeeeey/jupyternotebook-to-obsidian-vault.git).
Nothing bother me with working inside Jupyter notebook at all.

When I was working on the tool to convert Jupyter notebook to Obsidian markdown, I found out that Jupyter notebook saved as json string in disk.
No wonder the size is so big and parsing it would be a lot or works.
That is why I use [nbconverter](https://github.com/jupyter/nbconvert) to convert jupyter notebook to markdown and work around, modifying some jinja so it can convert things the way I want.

As I was working as intern, one of the my job requires me to use remote server to do heavy calculations.
The server serves a Jupyter Lab instance for its users.
I think [Jupyter lab](https://jupyter.org/) is like an environment that wraps Python, data, and collections of Jupyter notebook with very nice additions.
We can interact with data, terminal, and of course the notebooks inside Jupyter lab.

### Ok, The Things That Make Me Rethink "Why I _Still_ Use Jupyter Notebook?"

#### These are not necessarily 'the' issues, but hear me out!

We all know that Jupyter notebook is not "reactive". Means that it cannot detect any variable change.
This is related to basic workflow inside Jupyter notebook that you have to go through a loop to refine your works.
You can always write separated python module as a script or a collection of scripts that You can import later in the notebook, but it also means, You always have to run every single cell that relies on the cell where You do `from mymodule import *`, right?.
And it also goes to when you have to change a constant variable.
Because most of the scientists' concern when working inside Jupyter notebook is that they have their code either within the notebook or somewhere else that they could run and see the outputs.

Things will be complicated as notebook grows bigger as the works inside it grow.
There is no separation between the code and the cells' output in term of separation of preservation.
Jupyter notebook saves the code and cells' output in a single place, the json with specific format called `ipynb`.
Other thing related to this specific issue is that this ipynb file is not git friendly all the time.
An example of this, is when You have images that are produced by any visualization library, Jupyter notebook will always store those images as string within the json.
So everytime an image changes, a big part of the json string will always change.

Those above are the "issue" with Jupyter's lower-level protocols which are not really a big problem for a singel user, when you're wokring alone. _Jupyter indeed is a great tool_.

#### However, the real problem will be asserted as you work with other people.

I found that it is kinda hard to replicate and ensure the reproducibility of works that are done within Jupyter notebook.
The other thing about Jupyter notebook is the order of cell execution even if all variables inside Jupyter notebook are registered as global variable.
You can always define variables anywhere in any cell.
You can override variables with new value and so on so forth.
But You have to make sure that the cells (or variables) are placed in the correct order of execution (top to bottom) in order for the other cells that require variables from other cells can be run without any erros, at least `NameError`--the error that rises when You don't have any variable with given name.
This will lead to problem when you have to share your works with your colleagues without giving any additional works to ensure they can replicate your work properly in their own environment and machine.
This specific problem is 

Not to mention the third party libraries, Python version, and things that differentiate between your environment you colleagues'.

At this point, some of You may argue that above things are not necessarily an issue of using Jupyter notebook. You might be right, because We are not sharing the exact same experience.

### Now, I Am Telling You That There Exists Another Type of Notebook Called "Marimo"

> "[marimo](https://marimo.io/) is a reinvention of the Python notebook as a reproducible, interactive,
> and shareable Python program, instead of an error-prone JSON scratchpad."
>
> marimo team, 2025

marimo really is a game changer for any data science project development, I'm telling You!!
It's the reactivity for me.
It's the 'notebook.py' instead of 'notebook.ipynb' for me.
And it's the ✨ _fancy_ ✨ UI elements for me.

#### First of All

> [!NOTE]+ [Where did marimo came from?](https://marimo.io/blog/slac-marimo)
>
> Stanford’s SLAC National Accelerator Laboratory.



The usage of notebook is really just revolving around having your codes and their outputs in a single place which You can both interactively and iteratively working on, changing them around and see their outputs in one place.
Reducing even completely cutting of the loop of running the script via command line just to change a single variabe or fix some typos.
In fact this is the fundamental realization of one of the marimo founder, [Akshay Agrawal](https://www.akshayagrawal.com/). On his [interview](https://youtu.be/-faSV7U4acQ?si=78EZMcKAmrSL-AwO) with [Weigth & Biases](https://wandb.ai/site), He said that "It is really valuable to have programming environment that lets you see your data while your're working on it."


#### Time to Play

<!-- <iframe -->
<!--   src="https://kelreeeeey.github.io/marimo-gh-pages/notebooks/marimo_notebook.html?embed=true&show-chrome=false" -->
<!--   width="100%" -->
<!--   height="700" -->
<!--   frameborder="0" -->
<!-- ></iframe> -->

## References

- [Marimo notebook](https://marimo.io/)
- [Jupyter Notebook](https://jupyter.org/)
- [nbconverter](https://github.com/jupyter/nbconvert)
- Bennet, David, Akshay and Myles (2025) Why Stanford scientists needed a new Python notebook, marimo. Available at: https://marimo.io/blog/slac-marimo (Accessed: 31 July 2025).
- marimo (2025) About marimo, marimo. Available at: https://marimo.io/about (Accessed: 31 July 2025).
- [Akshay Agrawal](https://www.akshayagrawal.com/)
- [Weigth & Biases](https://wandb.ai/site)


