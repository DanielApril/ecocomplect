<?php namespace Eco\Projects\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateEcoProjectsProjects extends Migration
{
    public function up()
    {
        Schema::table('eco_projects_projects', function($table)
        {
            $table->boolean('show_on_index')->default(false);
        });
    }
    
    public function down()
    {
        Schema::table('eco_projects_projects', function($table)
        {
            $table->dropColumn('show_on_index');
        });
    }
}
