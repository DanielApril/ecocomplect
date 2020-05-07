<?php namespace Eco\Projects\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateEcoProjectsProjects extends Migration
{
    public function up()
    {
        Schema::create('eco_projects_projects', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->timestamp('deleted_at')->nullable();
            $table->string('name')->nullable();
            $table->string('subtitle')->nullable();
            $table->text('content_desc')->nullable();
            $table->integer('bedrooms')->nullable()->default(0);
            $table->decimal('square1', 10, 0)->nullable()->default(0);
            $table->decimal('square2', 10, 0)->nullable()->default(0);
            $table->decimal('square3', 10, 0)->nullable()->default(0);
            $table->integer('price_dk')->nullable()->default(0);
            $table->integer('price_f')->nullable();
            $table->integer('price_d')->nullable();
            $table->integer('price_c')->nullable();
            $table->text('foundation')->nullable();
            $table->string('view_360')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('eco_projects_projects');
    }
}
